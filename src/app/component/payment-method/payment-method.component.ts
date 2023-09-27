import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/model/item';
import { UserItem } from 'src/app/model/userItem';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.css']
})
export class PaymentMethodComponent {

  @Input() isVisible: boolean = false;
  @Input() item:Item | undefined;
  @Output() isVisibleChange = new EventEmitter<boolean>();

  constructor(private router:Router) {}

  // Aggiungi la variabile per gestire l'animazione di reindirizzamento
  isRedirecting: boolean = false;

  leavePaymentMethod(): void {
    this.isVisibleChange.emit(false);
  }

  redirectToPayment(): void {
    this.isRedirecting = true;
    
    // Simula un ritardo di 3 secondi per il reindirizzamento (da sostituire con la tua logica effettiva)
    setTimeout(() => {
      this.isRedirecting = false;
    }, 3000);
  }

  test():void {
    console.log("funziona");
  }

  apriPaginaEsterna() {
    // Definisci l'URL della pagina esterna
    const urlPaginaEsterna = 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=GMDY9KV97JGK8';

    // Apri la pagina esterna in una nuova finestra o scheda del browser
    window.open(urlPaginaEsterna, '_blank');
  }
}