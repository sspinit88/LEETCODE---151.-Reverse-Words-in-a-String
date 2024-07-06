/*
151. Reverse Words in a String

Given an input string s, reverse the order of the words.

A word is defined as a sequence of non-space characters. 
The words in s will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that s may contain leading or trailing spaces or multiple spaces between two words. 
The returned string should only have a single space separating the words. Do not include any extra spaces.

 

Example 1:

Input: s = "the sky is blue"
Output: "blue is sky the"

Example 2:

Input: s = "  hello world  "
Output: "world hello"
Explanation: Your reversed string should not contain leading or trailing spaces.

Example 3:

Input: s = "a good   example"
Output: "example good a"
Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.

 
Constraints:

    1 <= s.length <= 104
    s contains English letters (upper-case and lower-case), digits, and spaces ' '.
    There is at least one word in s.


Follow-up: 
If the string data type is mutable in your language, can you solve it in-place with O(1) extra space?

*/

function reverseWords(s) {
  // Удаление ведущих и завершающих пробелов из строки
  // Remove leading and trailing spaces from the string
  s = s.trim();

  // Разделение строки на массив слов
  // Split the string into an array of words
  let words = s.split(/\s+/);

  // Реверсирование массива слов
  // Reverse the array of words
  words.reverse();

  // Объединение слов в строку с одним пробелом между каждым словом
  // Join the words into a string with a single space between each word
  return words.join(' ');
}

/*

This solution ensures that the algorithm runs in O(n) time complexity and uses O(n) space complexity, where n is the length of the string. 
The trim, split, reverse, and join methods each run in linear time, and the split method creates a new array that can be as large as the input string. 
As for the follow-up question, JavaScript strings are immutable, so it's not possible to solve this problem in-place with O(1) extra space in JavaScript.

Это решение гарантирует, что алгоритм работает с временной сложностью O(n) и использует пространственную сложность O(n), где n — длина строки.
Методы обрезки, разделения, реверса и соединения выполняются за линейное время, а метод разделения создает новый массив, 
размер которого может соответствовать входной строке.
Что касается последующего вопроса, строки JavaScript неизменяемы, 
поэтому невозможно решить эту проблему на месте с помощью дополнительного пространства O(1) в JavaScript.
*/
