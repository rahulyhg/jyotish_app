// Code goes here
'use strict'
let app = angular.module('app', []);

app.component('mails', {
  templateUrl: 'mail.html',
  bindings: {
    active: '=',
    sent: '&'
  },
  controller: function(mailJob) {

    function updResponse(query) {
      console.log(query)
      return query.map(x => Object.keys(x).reduce((a, b) => (b == 'textLetter' && b.length ? a[b] = x[b].slice(0, 5) + '...' : a[b] = x[b], a), {}))

    }

    let unread = false;
    mailJob.get().then((response) => {

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
});

app.component('app', {
  templateUrl: 'navsection.html',
  bindings: {},
  controller: function() {
    this.readMessages = 3;
    this.navbarsList = navbars.map(x => x.name);
    this.active = 'All';

    this.makeActive = function(navName) {
      this.active = navName;
      console.log(this.active);
      this.readMessages = navName == 'All' ? navbars.length : mails.filter(x => x.inBox == navName).length;
    };
    this.sent = function() {
      console.log(this.active);
      return this.active;
    };
  }
});

app.service('mailJob', function($http) {
  this.post = function() {
    return $http({
      method: 'POST',

    })
  };

  this.get = function() {
    return $http.get('https://jyotish.gift/mail/show/')
  }
});

let navbars = [{
  'name': 'All',
  'active': false}, {
  'name': 'New mails',
  'active': false}, {
  'name': 'Send',
  'active': false}, {
  'name': 'Trash',
  'active': false}, {
  'name': 'Starred',
  'active': false}];