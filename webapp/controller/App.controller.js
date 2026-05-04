sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], function (Controller, MessageToast, JSONModel, ResourceModel) {
    "use strict";
    return Controller.extend("sap.ui5.test.controller.App", {
        onInit: function () {
            this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
        },
        onOpenDialog: function () {
            this.getOwnerComponent().openHelloDialog();
        }
    });
});