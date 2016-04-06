/**
 * Created by Олег on 06.04.2016.
 */

class ApiGenerator {

    constructor(options) {
        this.nameSender = options.nameSender;
        this.from = options.from;
        this.to = options.to;
        this.Theme = options.Theme;
        this.unicode = options.unicode;
        this.inBox = options.inBox;
    }

    static generateDefaultLetter (options){
        // static options
        if(!options) options = {};

        options.nameSender = 'Guest';
        options.from = 'test@jyotish.gift';
        options.Theme = '!TEST! ';
        options.unicode = 'UTF-8';
        options.inBox = 'Sent';

        return new ApiGenerator(options)

    }

}

export default ApiGenerator;