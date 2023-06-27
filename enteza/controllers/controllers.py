# -*- coding: utf-8 -*-
# from odoo import http


# class Enteza(http.Controller):
#     @http.route('/enteza/enteza', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/enteza/enteza/objects', auth='public')
#     def list(self, **kw):
#         return http.request.render('enteza.listing', {
#             'root': '/enteza/enteza',
#             'objects': http.request.env['enteza.enteza'].search([]),
#         })

#     @http.route('/enteza/enteza/objects/<model("enteza.enteza"):obj>', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('enteza.object', {
#             'object': obj
#         })
