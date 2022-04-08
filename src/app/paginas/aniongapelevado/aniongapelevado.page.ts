import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';


@Component({
  selector: 'app-aniongapelevado',
  templateUrl: './aniongapelevado.page.html',
  styleUrls: ['./aniongapelevado.page.scss'],
})
export class AniongapelevadoPage  {

  @ViewChild('cardHipo',{read:ElementRef, static:false}) chipoxia: ElementRef;

  @ViewChild('cardCeto',{read:ElementRef, static:false}) ccetonico: ElementRef;

  @ViewChild('cardRenal',{read:ElementRef, static:false}) crenal: ElementRef;
 
  constructor(private renderer:Renderer2, private element:ElementRef) {
    
   }

  ngOnInit() {
   
  }

  
  
  onCheckHipo() {
    const chipo =  this.chipoxia.nativeElement;
    console.log(this.chipoxia);
    console.log(this.chipoxia.nativeElement);
     this.renderer.setStyle(this.chipoxia.nativeElement, 'display','block');
    
   }
 
   onCheckCeto(){
     this.renderer.setStyle(this.ccetonico.nativeElement, 'display','block');
   }
 
   onCheckRenal(){
     this.renderer.setStyle(this.crenal.nativeElement, 'display','block');
   }

}
