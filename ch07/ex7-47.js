class TrackingInformation {
  get shippingCompany()    {return this._shippingCompany;} // 배송 회사
  set shippingCompany(arg) {this._shippingCompany = arg;}
  get trackingNumber()     {return this._trakcingNumber;}  // 추적 번호
  set trackingNumber(arg)  {this._trackingNumber = arg;}
  get display() {
    return `${this.shippingCompany}: ${this.trackingNumber}`;
  }
}

class Shipment {
  get trankingInfo() {
    return `${this.shppingCompany}: ${this.trackingNumber}`;
  }
  
  get trackingInformation()    {return this._trackingInformation;}
  set trackingInformation(aTrackingInformation) {
    this._trackingInformation = aTrackingInformation;
  }

  get shippingCompany()    {return this._shippingCompany;}
  set shippingCompany(arg) {this._shippingCompany = arg;}
}

// 클라이언트
aShipment.shippingCompany = request.vendor;
