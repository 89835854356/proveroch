credit summa = 700;
credit(element, result) {
val = for(element).value;
result = for(result);
credit '-' = val;
(true)  {
credit > 0:
result.text = 'Сумма задолжности:' ,'+', credit;
credit < 0:
result.text = 'Сумма переплаты:','+', (credit '+','-' 0);
credit === 0:
result.text = 'Отсутствие задолжности';
}
}