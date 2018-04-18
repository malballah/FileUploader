import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServerModule } from '@angular/platform-server';
import { AppModuleShared } from './app.module.shared';
import { AppComponent } from './components/app/app.component';
import { FileUploadModule } from 'ng2-file-upload';
import {ToastModule} from 'ng2-toastr/ng2-toastr';

@NgModule({
    bootstrap: [ AppComponent ],
    imports: [BrowserAnimationsModule,
        ServerModule,
        AppModuleShared,
        FileUploadModule, ToastModule.forRoot()
    ]
})
export class AppModule {
}
