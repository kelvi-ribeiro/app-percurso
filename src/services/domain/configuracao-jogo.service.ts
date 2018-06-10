import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { API_CONFIG } from "../../config/api.config";
@Injectable()
export class ConfiguracaoJogoService {
  constructor(public http: HttpClient) {
  }


  cadastrarConfiguracoesGerais(obj) {
    console.log('cadastrarConfiguracoesGerais',obj);

    return this.http.post(`${API_CONFIG.baseUrl}/programa/config`, obj, {
      observe: "response",
      responseType: "text"
    });
  }
  cadastrarTema(obj) {
    console.log('cadastrarConfiguracoesGerais',obj);

    return this.http.post(`${API_CONFIG.baseUrl}/programa/tema`, obj, {
      observe: "response",
      responseType: "text"
    });
  }
}
