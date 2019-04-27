function num() {
    var a = "\n\t"
    //a = "" + "\n"
    for(var b = 1; b < 10; b++){
      a = a + b.toString() + "\t"
    }
    a = a + "\n"
    for(var d = 1; d < 10; d++){
      //a = a + (d * 1) + "\t"
      a = a + d + "\t"
      for(var c = 1; c < 10; c++){
        a = a + (c * d).toString() + "\t"
      }
      a = a + "\n"
    }
    Logger.log(a)
  }