import { DetectMobile, CalculateResult } from "../tools";

describe('Test DetectMobile', () => {
    test('Test null', () => {
        expect(DetectMobile()).toBe(false);
    });
    test('Test Desktop', () => {
        expect(DetectMobile("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36")).toBe(false);
    });
    test('Test Mobile', () => {
        expect(DetectMobile("Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1")).toBe(true);
    });
});



describe('Test CalculateResult', () => {
    test('Test null', () => {
        expect(CalculateResult([])).toBe(0);
    });
    test('Test 0.1+0.2', () => {
        expect(CalculateResult(["0.1","+","0.2"])).toBe(0.3);
    });
    test('Test 1+3*2-6/2', () => {
        expect(CalculateResult(["1","+","3","*","2","-","6","/","2"])).toBe(4);
    });
});