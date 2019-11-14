import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Dropbox } from 'dropbox';
import { DomSanitizer } from '@angular/platform-browser';
import { File } from '../components/admin-files/file.model';
import { Response } from 'selenium-webdriver/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AdminDropboxService{  
  constructor(private http: HttpClient, private sanitizer : DomSanitizer){ }
  getImage(model: String) {
    const accessToken  = 'UXNUgN8yCeAAAAAAAAAADT9uCVLlHtzm2acF3WUc9n4H5LvkgXRFQKQqJKCiaYEc';
    const dbx = new Dropbox({  
      accessToken,  
      fetch  
    });
    console.log(model);
    dbx.filesDownload({  
      path: `/${model}.jpeg`
    }).then(response => {
      console.log(response);
     })
  }

  header = new HttpHeaders({
    //'Content-Type': 'application/json',
    'Dropbox-API-Arg': '{\"path\": \"/comm.txt\"}',
    // 'Dropbox-API-Arg': '{"path":"/Реново.jpeg"}',
    'Authorization': 'Bearer UXNUgN8yCeAAAAAAAAAADT9uCVLlHtzm2acF3WUc9n4H5LvkgXRFQKQqJKCiaYEc'
  }

  )

  upload(file: File) {
    const accessToken  = 'UXNUgN8yCeAAAAAAAAAADT9uCVLlHtzm2acF3WUc9n4H5LvkgXRFQKQqJKCiaYEc';

    const dbx = new Dropbox({  
      accessToken,  
      fetch  
    });

    dbx.filesUpload({
      contents: file,
      path: `/${file.name}`
    }).then(response => console.log(response));
  }

  folderInfo(callback:Function) {
    const accessToken  = 'UXNUgN8yCeAAAAAAAAAADT9uCVLlHtzm2acF3WUc9n4H5LvkgXRFQKQqJKCiaYEc';

    const dbx = new Dropbox({  
      accessToken,  
      fetch  
    });

    dbx.filesListFolder({
      path: ''  
    })
    .then(response =>{
      var result= response.entries.map(item => new File(item.name));
      if(callback){
        callback(result);
      }
    }, error=>{console.log(error)});
  }

  download(fileName: string) {
    const accessToken  = 'UXNUgN8yCeAAAAAAAAAADT9uCVLlHtzm2acF3WUc9n4H5LvkgXRFQKQqJKCiaYEc';

    const dbx = new Dropbox({  
      accessToken,  
      fetch  
    });

    dbx.filesGetTemporaryLink({path: `/${fileName}`})
    .then(function(response) {
	  	var link = document.createElement("a");
      link.href = response.link;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    })
    .catch(function(error) {
      console.log(error);
    });
  }
} 