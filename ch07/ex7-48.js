class Shipment {
  get trankingInfo() {
    return `${this.shppingCompany}: ${this.trackingNumber}`;
  }
  get shippingCompany()    {return this._shippingCompany;}
  set shippingCompany(arg) {this._shippingCompany = arg;}
  get trackingNumber()     {return this._trakcingNumber;}
  set trackingNumber(arg)  {this._trackingNumber = arg;}
}

// 클라이언트
aShipment.shippingCompany = request.vendor;
