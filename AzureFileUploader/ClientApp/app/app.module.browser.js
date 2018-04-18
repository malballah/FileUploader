var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AppModuleShared } from './app.module.shared';
import { AppComponent } from './components/app/app.component';
import { FileUploadModule } from 'ng2-file-upload';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        bootstrap: [AppComponent],
        imports: [
            BrowserModule, BrowserAnimationsModule,
            AppModuleShared,
            FileUploadModule, ToastModule.forRoot()
        ],
        providers: [
            { provide: 'BASE_URL', useFactory: getBaseUrl }
        ]
    })
], AppModule);
export { AppModule };
export function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
//# sourceMappingURL=app.module.browser.js.map