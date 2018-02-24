export class DateUtil {
    static convertStringToDate(s: string): Date {
        const stringArr = s.split('/');
        return new Date(parseInt(stringArr[2], 10), parseInt(stringArr[1], 10) - 1, parseInt(stringArr[0], 10));
    }
}
