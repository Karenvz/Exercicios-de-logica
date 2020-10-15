/**Lista decrescente**/


  function quicksort (array) {
    if (array.length <= 1) {
      return array
    }
  
    const pivot = array[0]
    const left = []
    const right = []
  
    for (let i = 1; i < array.length; i++) {
      array[i] < pivot ? left.push(array[i]) : right.push(array[i])
    }
  
    return quicksort(right).concat(pivot, quicksort(left))
  };

  function startAll () {
    let class1 = ['yasmin', 'isadora', 'benedita', 'brenda', 'luiza', 'fatima', 'caio', 'teresinha', 'hugo', 'zeca', 'catarina', 'emanuel', 'marcelo', 'claudio', 'marina', 'isabela', 'anthony', 'rebeca', 'filipe', 'laís', 'vinicius', 'helena', 'elisa', 'rodrigo', 'geraldo', 'yuri', 'marcio']
    let class2 = ['benedita', 'elisa', 'emanuel', 'rodrigo', 'filipe', 'marcio', 'teresinha', 'laís', 'vinicius', 'marina', 'catarina', 'luiza', 'marcelo', 'rebeca', 'hugo', 'geraldo', 'zeca', 'caio', 'anthony', 'yasmin', 'claudio']
    let class3 = ['isadora', 'isabela', 'laís', 'claudio', 'catarina', 'zeca', 'teresinha', 'emanuel', 'marcio', 'fatima', 'rodrigo', 'luiza', 'brenda', 'marina', 'marcelo', 'benedita', 'rebeca', 'filipe', 'helena', 'elisa', 'hugo', 'geraldo']
    
    let result_1 = quicksort (class1);
    let result_2 = quicksort (class2);
    let result_3 = quicksort (class3);
    console.log(result_1,result_2,result_3);
    };
    
    startAll();



/**Lista crescente**/

  function quicksort (array) {
    if (array.length <= 1) {
      return array
    }
  
    const pivot = array[0]
    const left = []
    const right = []
  
    for (let i = 1; i < array.length; i++) {
      array[i] < pivot ? left.push(array[i]) : right.push(array[i])
    }
  
    return quicksort(left).concat(pivot, quicksort(right))
  };

  function startAll () {
    let class1 = ['yasmin', 'isadora', 'benedita', 'brenda', 'luiza', 'fatima', 'caio', 'teresinha', 'hugo', 'zeca', 'catarina', 'emanuel', 'marcelo', 'claudio', 'marina', 'isabela', 'anthony', 'rebeca', 'filipe', 'laís', 'vinicius', 'helena', 'elisa', 'rodrigo', 'geraldo', 'yuri', 'marcio']
    let class2 = ['benedita', 'elisa', 'emanuel', 'rodrigo', 'filipe', 'marcio', 'teresinha', 'laís', 'vinicius', 'marina', 'catarina', 'luiza', 'marcelo', 'rebeca', 'hugo', 'geraldo', 'zeca', 'caio', 'anthony', 'yasmin', 'claudio']
    let class3 = ['isadora', 'isabela', 'laís', 'claudio', 'catarina', 'zeca', 'teresinha', 'emanuel', 'marcio', 'fatima', 'rodrigo', 'luiza', 'brenda', 'marina', 'marcelo', 'benedita', 'rebeca', 'filipe', 'helena', 'elisa', 'hugo', 'geraldo']
    
    let result_1 = quicksort (class1);
    let result_2 = quicksort (class2);
    let result_3 = quicksort (class3);
    console.log(result_1,result_2,result_3);
    };
    
    startAll();




/**Faltas do aluno **/

   
    function binarySearch (aula, element) {
        let start = 0
        let end = aula.length - 1
      
        while (start <= end) {
          // Find the middle
          const mid = Math.floor((start + end) / 2)
      
          // Found the element!
          if (aula[mid] === element) {
            return true
          } else if (aula[mid] < element) {
            start = mid + 1
          } else {
            end = mid - 1
          }
        }
      
        return false
      }
      function startAll () {
        let class1 = ["anthony", "benedita", "brenda", "caio", "catarina", "claudio", "elisa", "emanuel", "fatima", "filipe", "geraldo", "helena", "hugo", "isabela", "isadora", "laís", "luiza", "marcelo", "marcio", "marina", "rebeca", "rodrigo", "teresinha", "vinicius", "yasmin", "yuri", "zeca"]
        let class2 = ["anthony", "benedita", "caio", "catarina", "claudio", "elisa", "emanuel", "filipe", "geraldo", "hugo", "laís", "luiza", "marcelo", "marcio", "marina", "rebeca", "rodrigo", "teresinha", "vinicius", "yasmin", "zeca"]
        let class3 = ["benedita", "brenda", "catarina", "claudio", "elisa", "emanuel", "fatima", "filipe", "geraldo", "helena", "hugo", "isabela", "isadora", "laís", "luiza", "marcelo", "marcio", "marina", "rebeca", "rodrigo", "teresinha", "zeca"]
        
        let result_1 = binarySearch(class1, "yuri");
        let result_2 = binarySearch(class2, "yuri");
        let result_3 = binarySearch(class3, "yuri");
        console.log(result_1,result_2,result_3);
    };
    
    startAll();

  