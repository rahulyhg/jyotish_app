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
            function updResponse(query) {

                let month = ['January', 'February', 'March', 'April', 
                            'May', 'June', 'July','August',
                            'September', 'October', 'November','December']


                                    console.log(query)    
                return query
                    .map(x => Object.keys(x)
                        .reduce((a, b) => {       

                            if (b == 'textLetter' && b.length) {
                                a[b] = x[b].slice(0, 5) + '...'
                            } else if (b == 'created') {
                                a[b] = month[1+ +x[b].slice(5, 7)] +' '+x[b].slice(8, 10)
                            } else {
                                a[b] = x[b]
                            }
                            return a
                        }, {})
                    )
            }

            let unread = false;
            mailJob.RESTget().then((response) => {

                this.resBody = response.data;
                this.mails = updResponse(this.resBody);

            }).catch(e => console.log(e));

            this.da = function(letter) {

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
