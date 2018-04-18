import { Component, OnInit, ViewContainerRef } from '@angular/core';

import { FileUploader } from 'ng2-file-upload';
import { ToastsManager } from 'ng2-toastr';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styles: ['.upload-zone .well {height: 500px;text-align: center;}']
})
export class AppComponent implements OnInit {
    public uploader: FileUploader = new FileUploader({ url: "/Home/UploadFile/", autoUpload: true });
    public hasBaseDropZoneOver: boolean = false;

    constructor(private toastr: ToastsManager, vRef: ViewContainerRef) {
        this.toastr.setRootViewContainerRef(vRef);
    }

    ngOnInit() {
      
        this.uploader.onCompleteItem = (item, response) => {
            if (response.length==0)
                this.toastr.success('File has been uploaded successfully', 'Success!');
            else
                this.toastr.success('Cannot save file to disk', 'Failed!');
        };
    }

    public fileOverBase(e: any): void {
        this.hasBaseDropZoneOver = e;
    }
}
