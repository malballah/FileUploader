var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewContainerRef } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { ToastsManager } from 'ng2-toastr';
var AppComponent = (function () {
    function AppComponent(toastr, vRef) {
        this.toastr = toastr;
        this.uploader = new FileUploader({ url: "/Home/UploadFile/", autoUpload: true });
        this.hasBaseDropZoneOver = false;
        this.toastr.setRootViewContainerRef(vRef);
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.uploader.onCompleteItem = function (item, response) {
            if (response.length == 0)
                _this.toastr.success('File has been uploaded successfully', 'Success!');
            else
                _this.toastr.success('Cannot save file to disk', 'Failed!');
        };
    };
    AppComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Component({
        selector: 'app',
        templateUrl: './app.component.html',
        styles: ['.upload-zone .well {height: 500px;text-align: center;}']
    }),
    __metadata("design:paramtypes", [ToastsManager, ViewContainerRef])
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map