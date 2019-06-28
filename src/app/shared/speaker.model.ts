export class Speaker {
    public meetupId: string;
    public employeeId: string;
    public nameReport: string;
    public headlineReport: string;
    public fileUrl: string;
    public videoUrl: string;

    constructor(meetupId: string, employeeId: string, nameReport: string, headlineReport: string, fileUrl: string,
                videoUrl: string){
        this.meetupId = meetupId;
        this.employeeId = employeeId;
        this.nameReport = nameReport;
        this.headlineReport = headlineReport;
        this.fileUrl = fileUrl;
        this.videoUrl = videoUrl;
    }
}
