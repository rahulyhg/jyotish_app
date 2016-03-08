// Code goes here
'use strict';
let app = angular.module('app', []);

app.component('mails', {
  templateUrl:'mail.html',
  bindings: {
    active:'=',
    sent:'&'
  },
  controller: function() {
      let unread = false;
      this.mails = mails;
      
      this.da = function(letter) {
        console.log(letter.status);
        letter.status != letter.status;
      };
     this.createFilter = function() {
        if(unread){
          unread = false;
          this.mails = mails;
        } else {
          this.mails = mails.filter(a=>a.status);
          unread = true;
        }
      };
      this.filter = function(status){
        return status = 'All' ? '' : status;
      };
      this.unreadCounter = this.mails.filter(x=>x.inBox == this.active);
    }
});

app.component('app', {
   templateUrl:'navsection.html',
   bindings: {
    
   },
   controller: function() {
    this.readMessages = 3;
    this.navbarsList = navbars.map(x=>x.name);
    this.active = 'All';
    
    this.makeActive = function(navName) {
        this.active = navName;
        //console.log(this.active);
        this.readMessages = navName == 'All' 
        ? navbars.length 
        : mails.filter(x=>x.inBox == navName).length;
      };
    this.sent = function() { 
      console.log(this.active);
      return this.active;
    };
  }
});



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
let mails = [{
    'from': 'oleg@ukr.net',
    'to': 'oleglustneko@gmail.com',
    'date': '14-09-15',
    'nameSender': 'Oleg',
    'Theme': 'Privet Stepan Suvorov',
    'attach': {
        'file': 'x'
    },
    'unicode': 'UTF-8',
    'textLetter': 'Privet Stepan kak dela?',
    'status': true,
    'inBox': 'New mails'
}, {
    'from': 'oleg@ukr.net',
    'to': 'oleglustneko@gmail.com',
    'date': '14-09-15',
    'nameSender': 'Oleg',
    'Theme': 'TEST ANGULAR MAILS',
    'attach': {
        'file': 'x'
    },
    'unicode': 'UTF-8',
    'textLetter': 'Privet Stepan kak dela?',
    'status': true,
    'inBox': 'Send'
}, {
    'from': 'oleg@ukr.net',
    'to': 'oleglustneko@gmail.com',
    'date': '14-09-15',
    'nameSender': 'Oleg',
    'Theme': 'HI THERE',
    'attach': {
        'file': 'x'
    },
    'unicode': 'UTF-8',
    'textLetter': 'Privet Stepan kak dela?',
    'status': false,
    'inBox': 'Trash'
}, {
    'from': 'oleg@ukr.net',
    'to': 'oleglustneko@gmail.com',
    'date': '14-09-15',
    'nameSender': 'Oleg',
    'Theme': 'JavaScript ',
    'attach': {
        'file': 'x'
    },
    'unicode': 'UTF-8',
    'textLetter': 'Privet Stepan kak dela?',
    'status': false,
    'inBox': 'Trash'
}, {
    'from': 'oleg@ukr.net',
    'to': 'oleglustneko@gmail.com',
    'date': '14-09-15',
    'nameSender': 'Oleg',
    'Theme': 'LEARN ANGULAR AND MAKE 5000$',
    'attach': {
        'file': 'x'
    },
    'unicode': 'UTF-8',
    'textLetter': 'Privet Stepan kak dela?',
    'status': true,
    'inBox': 'Starred'
}, {
    'from': 'oleg@ukr.net',
    'to': 'oleglustneko@gmail.com',
    'date': '14-09-15',
    'nameSender': 'Oleg',
    'Theme': 'Jyotish Astrology call me',
    'attach': {
        'file': 'x'
    },
    'unicode': 'UTF-8',
    'textLetter': 'Privet Stepan kak dela?',
    'status': true,
    'inBox': 'Starred'
}, {
    'from': 'oleg@ukr.net',
    'to': 'oleglustneko@gmail.com',
    'date': '14-09-15',
    'nameSender': 'Oleg',
    'Theme': 'vk.com/oleglustenko',
    'attach': {
        'file': 'x'
    },
    'unicode': 'UTF-8',
    'textLetter': 'Privet Stepan kak dela?',
    'status': true,
    'inBox': 'Send'
}, {
    'from': 'oleg@ukr.net',
    'to': 'oleglustneko@gmail.com',
    'date': '14-09-15',
    'nameSender': 'Oleg',
    'Theme': 'Privet Stepan Suvorov',
    'attach': {
        'file': 'x'
    },
    'unicode': 'UTF-8',
    'textLetter': 'Privet Stepan kak dela?',
    'status': true,
    'inBox': 'Send'
}, {
    'from': 'oleg@ukr.net',
    'to': 'oleglustneko@gmail.com',
    'date': '14-09-15',
    'nameSender': 'Oleg',
    'Theme': 'PRIVET ANGULAR LEARN-TEAM',
    'attach': {
        'file': 'x'
    },
    'unicode': 'UTF-8',
    'textLetter': 'NE PRIVVVVEEEETTTT',
    'status': false,
    'inBox': 'Send'
}, ];