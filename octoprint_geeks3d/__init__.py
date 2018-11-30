# coding=utf-8
from __future__ import absolute_import

import octoprint.plugin
import socket

class Geeks3DPlugin(octoprint.plugin.StartupPlugin,
					   octoprint.plugin.TemplatePlugin,
					   octoprint.plugin.SettingsPlugin,
					   octoprint.plugin.AssetPlugin):
	ip = ""
	port = ""

	def get_settings_defaults(self):
		return dict(ip="")


	def get_template_configs(self):
		return [
			dict(type="navbar", custom_bindings=False),
			dict(type="settings", custom_bindings=False)
		]

	def get_assets(self):
		return dict(
			js=["js/geeks3d.js"],
			css=["css/geeks3d.css"],
			less=["less/geeks3d.less"]
		)

__plugin_name__ = "3D Geeks"
__plugin_implementation__ = Geeks3DPlugin()
