import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, Validators,FormGroup } from '@angular/forms';
import { ConfiguracaoJogoService } from '../../services/domain/configuracao-jogo.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  cores;
  quantidadePerguntaAvatar;
  numeroCoresAvatarInput = [];
  quantidadeMensagem;
  mensagemInput = [];

  formGroup: FormGroup;
  constructor(
    public navCtrl: NavController,
    public formBuilder: FormBuilder,
    public configuracaoJogoService:ConfiguracaoJogoService
  ) {
    this.cores = [
      {
        valor:0,
        cor:'Azul'
      },
      {
        valor:1,
        cor:'Amarelo'
      },
      {
        valor:2,
        cor:'Preto'
      }
    ];
    this.quantidadePerguntaAvatar = [
      {
      }
    ]
    this.quantidadeMensagem = [
      {
      }
    ]
    this.formGroup = this.formBuilder.group({
      coresTabuleiro: [null, [Validators.required]],
      coresAvatar: [[], [Validators.required]],
      mensagensUltimaCasa: [[], [Validators.required]]
    });
  }

  adicionarCorAvatar(){
    this.quantidadePerguntaAvatar.push({});
  }
  inserirCor(e){
    this.numeroCoresAvatarInput.push(e)
    console.log(this.numeroCoresAvatarInput)
  }

  adicionarMensagem(){
    this.quantidadeMensagem.push({});
  }
  inserirMensagem(e){
    this.mensagemInput.push(e)
    console.log('inserirMensagem',this.mensagemInput)
  }

  enviarConfiguracao(){
    this.formGroup.controls.coresAvatar.setValue(this.numeroCoresAvatarInput);
    this.formGroup.controls.mensagensUltimaCasa.setValue(this.mensagemInput);

    this.configuracaoJogoService.cadastrarConfiguracoesGerais(this.formGroup.value)
    .subscribe(response=>{
      console.log('response',response)
    },
  error =>{});
  }
  }




