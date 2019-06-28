var Speaker = (function () {
    function Speaker(meetupId, employeeId, nameReport, headlineReport, fileUrl, videoUrl) {
        this.meetupId = meetupId;
        this.employeeId = employeeId;
        this.nameReport = nameReport;
        this.headlineReport = headlineReport;
        this.fileUrl = fileUrl;
        this.videoUrl = videoUrl;
    }
    return Speaker;
})();
exports.Speaker = Speaker;
//# sourceMappingURL=speaker.model.js.map