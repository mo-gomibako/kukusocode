var a = "\t"
for(var b = 1; b < 10; b++){
  a = `${a}${b}\t`
}
a = `${a}\n`
for(var d = 1; d < 10; d++){
  a = `${a}${d}\t`
  for(var c = 1; c < 10; c++){
    a = `${a}${c * d}\t`
  }
  a = `${a}\n`
}
console.log(a)