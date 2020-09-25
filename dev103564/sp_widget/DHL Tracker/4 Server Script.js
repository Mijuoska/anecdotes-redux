(function() {
if (input.tracking_code) {
var DHL = new DHL_Utils();
var shipmentData = DHL.getShipmentData(input.tracking_code)
var shipmentID = DHL.createShipment(shipmentData)
DHL.createTrackingEvents(shipmentData, shipmentID)
console.log(shipmentData)
 }
data.shipments = []
var shipment = {}
shipment.tracking_events = []
var shipmentGR = new GlideRecord('u_shipments');
var trackingEventGR = new GlideRecord('u_dhl_tracking_events')
shipmentGR.addQuery('sys_created_by', gs.getUserName())	
shipmentGR.query();
while (shipmentGR.next()) {
	$sp.getRecordDisplayValues(shipment, shipmentGR, 'u_id, u_origin, u_destination, u_status_code')
	trackingEventGR.addQuery('u_shipment', shipmentGR.getUniqueValue())
	trackingEventGR.query();
	while (trackingEventGR.next()) {
		var trackingEvent = {}
		$sp.getRecordDisplayValues(trackingEvent, trackingEventGR, 'u_status, u_status_code, u_timestamp, u_location')
		shipment.tracking_events.push(trackingEvent)
	}
		data.shipments.push(shipment);
}
console.log(data.shipments)

	

})();