// MailJob.$inject = ['$http'];

import angular from 'angular';

class LetterConstructor {

    constructor() {}

    generate (options){
        // static options
        if(!options) options = {};

        options.nameSender = 'Guest';
        options.from = 'test@jyotish.gift';
        options.Theme = '!TEST! ';
        options.unicode = 'UTF-8';
        options.inBox = 'Sent';
       
        return options;
    }

}

export default angular.module('services.letter-consturctor', [])
    .service('letterConsturctor', LetterConstructor)
    .name