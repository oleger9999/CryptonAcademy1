 var AES = C_algo.AES = BlockCipher.extend({
        _doReset: function () {
            var t;

            // Skip reset of nRounds has been set before and key did not change
            if (this._nRounds && this._keyPriorReset === this._key) {
                return;
@@ -98,7 +100,7 @@
                if (ksRow < keySize) {
                    keySchedule[ksRow] = keyWords[ksRow];
                } else {
                    var t = keySchedule[ksRow - 1];
                    t = keySchedule[ksRow - 1];

                    if (!(ksRow % keySize)) {
