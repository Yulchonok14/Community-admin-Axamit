var Meetup = (function () {
    function Meetup(id, name, shortLocation, date, time, fullLocation, description, images, speakers) {
        this.id = id;
        this.name = name;
        this.date = date;
        this.time = time;
        this.shortLocation = shortLocation;
        this.fullLocation = fullLocation;
        this.description = description;
        this.images = images;
        this.speakers = speakers;
    }
    return Meetup;
})();
exports.Meetup = Meetup;
//# sourceMappingURL=meetup.model.js.map