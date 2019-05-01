var a = "\t"
for(var b = 1; b < 10; b++){
  a += `${b}\t`
}
a += `\n`
for(var d = 1; d < 10; d++){
  a  += `${d}\t`
  for(var c = 1; c < 10; c++){
    a += `${c * d}\t`
  }
  a += `\n`
}
console.log(a)