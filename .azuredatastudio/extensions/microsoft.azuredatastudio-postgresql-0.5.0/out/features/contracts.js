"use strict";
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.TelemetryParams = exports.TelemetryNotification = void 0;
const vscode_languageclient_1 = require("vscode-languageclient");
// ------------------------------- < Telemetry Sent Event > ------------------------------------
/**
 * Event sent when the language service send a telemetry event
 */
var TelemetryNotification;
(function (TelemetryNotification) {
    TelemetryNotification.type = new vscode_languageclient_1.NotificationType('telemetry/pgsqlevent');
})(TelemetryNotification = exports.TelemetryNotification || (exports.TelemetryNotification = {}));
/**
 * Update event parameters
 */
class TelemetryParams {
}
exports.TelemetryParams = TelemetryParams;
// ------------------------------- </ Telemetry Sent Event > ------------------------------------

//# sourceMappingURL=contracts.js.map
