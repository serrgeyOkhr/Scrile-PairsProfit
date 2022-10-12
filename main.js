/** Get pairs
 * 

    Имеется массив целых чисел. Нужно создать функцию, которая сгруппирует числа по сумме их пар
    
    Важно! Каждый элемент массива разрешается использовать не более одного раза!
 */

function getPairs(arr, sum) {
  let usedIndex = []; // тут будем хранить индексы использованных элементов
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (usedIndex.indexOf(i) !== -1) continue; // проверяем на повторное использование элементов
    for (let j = 1 + i; j < arr.length; j++) {
      if (usedIndex.indexOf(j) !== -1) continue;
      if (arr[i] + arr[j] === sum) {
        result.push([arr[i], arr[j]]);
        usedIndex.push(i);
        usedIndex.push(j);
        break;
      }
    }
  }
  return result;
}

// console.log(getPairs([-5, 33, 2, 2, 3, 5, 0, 10, 3], 5))

//------------------------------------------------------------------------------------------//

/**  Test function for “Get pairs”

Нужно написать функцию, которая протестирует функцию getPairs из первого задания

На вход подается исходный массив, желаемая сумма пар и массив, который ожидается получить в результате успешного выполнения функции getPairs с заданными аргументами

Внутри тестирующей функции выполняется getPairs и ее результат сравнивается с массивом expectedArr

На выходе функции ожидается булевая переменная(true/false)

Важно, что элементы внутри массива expectedArr и элементы внутри его подмассивов могут располагаться в любом порядке, поэтому тестирующая функция должна учитывать этот момент и выдавать положительный результат даже в случае несовпадения порядка элементов
 * 
 */

function resultsMatched(arr, sum, expectedArr) {
  let res = getPairs(arr, sum);
  let usedIndex = [];
  let isMistake = true;

  // если разная длина, точно ошибка.
  if (expectedArr.length !== res.length) return false;

  /* 
    Пройдем по эталонному массиву. Для каждого подмассива будем искать пару в результирующем массиве. Если найдем, то исключим ее из поиска для следующих итераций. Если не найдем - поднимем флаг ошибки.
  */ 
  for (let i = 0; i < expectedArr.length; i++) { 
    isMistake = true;
    let expectedPair = expectedArr[i];
    
    for (let j = 0; j < res.length; j++) { 
      let resPair = res[j];

      if (usedIndex.indexOf(j) !== -1) continue;


      if (expectedPair.indexOf(resPair[0]) !== -1 && expectedPair.indexOf(resPair[1]) !== -1) { 
        isMistake = false;
        usedIndex.push(j);
        break;
      }
    }
    // если не нашли ни одного совпадения попадаем сюда
    if (isMistake) {
      return false;
    }
  }

  return true
}

  /* Тест кейсы */

  // console.log(resultsMatched([-5, 33, 2, 2, 3, 5, 0, 10, 3], 5, [[-5, 10], [2, 3], [2, 3], [5, 0]]));
  // console.log(resultsMatched([22, 3, 5, 0, 2, 2], 5,[[3, 2], [5, 0]]));
  // console.log(resultsMatched([5, 5, 5, 0, 0, 0, 5], 5, [[5, 0], [5, 0], [5, 0]]));
  // console.log(resultsMatched([1,2, 5, 6], 5, []));

//------------------------------------------------------------------------------------------//

/** Get profit

    Имеется массив целых чисел. Нужно создать функцию, которая найдет два числа с наибольшей разницей между ними и вернет их индексы в виде массива из двух элементов - [ lowest, biggest ]
    
    Важно, чтобы большее число находилось справа от меньшего
    В случае, если подобной пары чисел в массиве нет(разница между ними <= 0), то вернуть пустой массив
 * 
 */

  function getProfit(arr) {
    let maxSubstr = 0
    let result = []

    for (let i = 0; i < arr.length; i++) {
      for (let j = 1 + i; j < arr.length; j++) {

        if (arr[j] - arr[i] > maxSubstr) {
          maxSubstr = arr[j] - arr[i];
          result[0] = i
          result[1] = j

        }
      }
    }
    // console.log("res:", result);
    return result
  }    

  getProfit( [3,1,9,7,5,6,7,1,10, 15])