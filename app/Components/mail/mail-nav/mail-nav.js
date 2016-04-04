import tmpl from './mail-nav.html'

export default function mailNav() {
    return {
        template: tmpl,
        bindings: {},
        controller: function() {

            this.readMessages = 3;
            this.active = 'All';            

            this.sent = function() {
                return this.active;
            };
        }
    }
}
