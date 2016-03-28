import tmpl from './mail-groups.html';

export default function navbars() {
    return {
        template: tmpl,
        bindings: {},
        controller: function() {
            let navbars = [{
                'name': 'All',
                'active': false
            }, {
                'name': 'New mails',
                'active': false
            }, {
                'name': 'Send',
                'active': false
            }, {
                'name': 'Trash',
                'active': false
            }, {
                'name': 'Starred',
                'active': false
            }];
            this.navbarsList = navbars.map(x => x.name);
        }
    }
}
