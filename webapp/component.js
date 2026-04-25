sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], function (UIComponent, JSONModel, ResourceModel) {
    "use strict";
    return UIComponent.extend("sap.ui5.test.Component", {
        metadata: {
            manifest: "json",
        },
        init: function () {
            UIComponent.prototype.init.apply(this, arguments);
            // set the data model on view
            var oData = {
                recipient: {
                    name: "UI5"
                }
            };
            var oModel = new JSONModel(oData);
            this.setModel(oModel);

            // set the resource model on view
            var oResourceModel = new ResourceModel({
                bundleName: "sap.ui5.test.i18n.i18n",
                supportedLocales: [""],
                fallbackLocale: ""
            });
            this.setModel(oResourceModel, "i18n");
        },
    });
});