import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

    constructor(private httpClient: HttpClient) { }

    getTechs() {
        return this.httpClient.get('http://localhost:3333/api/tech');
    }

    postTech(techInfo: any, file: File) {
        let formData = new FormData();
        formData.append('name', techInfo.name)
        formData.append('description', techInfo.description)
        formData.append('img_url', file)

        return this.httpClient.post('http://localhost:3333/api/tech', formData);
    }

    editTech(techInfo: any, file: File) {
        let formData = new FormData();
        formData.append('name', techInfo.name)
        formData.append('description', techInfo.description)

        return this.httpClient.put(`http://localhost:3333/api/tech/${techInfo._id}`, formData)
    }

    deleteTech(techInfo: any) {
        return this.httpClient.delete(`http://localhost:3333/api/tech/${techInfo._id}`, techInfo)
    }

    sendEmailContact(contactInfo: any) {
        return this.httpClient.post('http://localhost:3333/api/contact/email/send', contactInfo)
    }

}