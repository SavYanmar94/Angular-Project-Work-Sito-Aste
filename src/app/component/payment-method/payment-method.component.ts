import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.css']
})
export class PaymentMethodComponent {
  @Input() isVisible: boolean = false;
  @Output() isVisibleChange = new EventEmitter<boolean>();

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
      // Qui dovresti effettuare il reindirizzamento effettivo al pagamento
    }, 3000);
  }
}