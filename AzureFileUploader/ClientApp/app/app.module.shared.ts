import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './components/app/app.component';
import { FileUploadModule } from 'ng2-file-upload';
import { ToastModule } from 'ng2-toastr/ng2-toastr';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [BrowserAnimationsModule,
        CommonModule,
        HttpModule,
        FormsModule,
        FileUploadModule,  ToastModule.forRoot()
    ]
})
export class AppModuleShared {
}
