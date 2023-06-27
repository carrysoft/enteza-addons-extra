from odoo import models, fields, api

class AccountAsset(models.Model):
    _inherit = 'account.asset'

    purchase_price = fields.Float(string='Precio de compra')
    initial_units = fields.Float(string='Unidades compradas inicialmente')
    unit_price = fields.Float(string='Precio unitario', compute='_compute_unit_price')

    @api.depends('purchase_price', 'initial_units', 'value_residual')
    def _compute_unit_price(self):
        for asset in self:
            if asset.initial_units != 0:
                asset.unit_price = asset.value_residual / asset.initial_units
            else:
                asset.unit_price = 0

