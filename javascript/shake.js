var prevX = 1.0;

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady(){
	watchForShake(1.0);
}

function watchForShake(threshold) {
	var axl = newAccelermeter();
	axl.watchAcceleration(
		function (Accel) {
			if (true === Accel.is_updating){
				return;
			}
			var diffX = Math.abs(Accel.x) - prevX;
			if (diffX >= threshold) {
				// Alles was hier steht wird ausgeführt, wenn das Gerät geschüttelt wird
				onShake();
			}
			prevX = Math.abs(Accel.x);
		}
		, function(){}
		, {frequency : 100}
	);
}
