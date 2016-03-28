import tmpl from './mail-list.html';

// MailList.$inject = ['mailJob']

export default function MailList() {
    return {
        template: tmpl,
        bindings: {
            active: '=',
            sent: '&'
        },
        controller: function(mailJob) {

            // console.log(mailJob)

            function updResponse(query) {
                console.log(query)
                return query
                    .map(x =>
                        Object.keys(x)
                        .reduce((a, b) => (b == 'textLetter' && b.length ? a[b] = x[b].slice(0, 5) + '...' : a[b] = x[b], a), {})
                    )
            }

            let unread = false;
            mailJob.RESTget().then((response) => {

                this.resBody = response.data;
                this.mails = updResponse(this.resBody);
                console.log(this.mails)
            }).catch(e => console.log(e));

            this.da = function(letter) {
                console.log(letter.status);
                letter.status != letter.status;
            };
            this.createFilter = function() {
                if (unread) {
                    unread = false;
                    this.mails = this.mails;
                } else {
                    this.mails = this.mails.filter(a => a.status);
                    unread = true;
                }
            };
            this.filter = (status) => status = 'All' ? '' : status;

            // this.unreadCounter = this.mails.filter(x=>x.inBox == this.active);
        }
    }
}