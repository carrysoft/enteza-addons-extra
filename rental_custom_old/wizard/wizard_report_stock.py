# Copyright 2019 Tecnativa - Ernesto Tejeda
# License AGPL-3.0 or later (http://www.gnu.org/licenses/agpl.html).

from odoo import _, api, fields, models
from odoo.exceptions import ValidationError


class WizardReportStock(models.TransientModel):
    _name = "wizards.report.stock"
    _description = "Product pack line"


    def export_action(self):
        if self.options=='product' and not self.product_ids:
            raise ValidationError("Indique al menos un articulo")
        if self.options=='category' and not self.categ_id:
            raise ValidationError("Indique al menos una clasificacion")
        if not self.warehouse_id:
            raise ValidationError("Indique un almacen")
        product_ids=self.product_ids.ids
        if self.options=='category' and  self.categ_id:
            product_ids=self.env['product.product'].search([('categ_id','=',self.categ_id.id),('rental', '=', True),('type', '=','product')]).ids
        return {
            'name': 'Reporte Existencias',
            'type': 'ir.actions.client',
            'tag': 'rental_dashboard',
            'context': {'product_ids':product_ids ,'date_start':self.date_start,'date_stop':self.date_stop,'warehouse_id':self.warehouse_id.id}
        }

    options=fields.Selection([('product','Por Articulo'),('category','Clasificacion')],string="Opcion",required=True)
    categ_id=fields.Many2one("product.category",string="Categoria")
    product_ids=fields.Many2many("product.product",string="Productos")
    date_start=fields.Date(string="Fecha Inicio",required=True)
    date_stop=fields.Date(string="Fecha Fin",required=True)
    warehouse_id=fields.Many2one("stock.warehouse",string="Almacen")
