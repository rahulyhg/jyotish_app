import tmpl from './mail-nav.html'

export default function mailNav() {
    return {
        template: tmpl,
        bindings: {},
        controller: function() {

            this.readMessages = 3;
            this.active = 'All';

            //     this.active = navName;
            //     console.log(this.active);
            //     this.readMessages = navName == 'All' ? navbars.length : mails.filter(x => x.inBox == navName).length;
            // };/ this.makeActive = function(navName) {
            //

            this.sent = function() {
                return this.active;
            };
        }
    }
}
