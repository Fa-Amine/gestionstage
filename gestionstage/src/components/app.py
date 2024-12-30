def trou(text):
    if(len(text) % 2 != 0):
        return text
    if len(text) == 2:
        return text
    half1 = text[0:len(text) // 2]
    half2 = text[(len(text) // 2) : len(text)]
    half1 = half1[:-1]
    half2 = half2[1:]
    text = half1+half2
    return trou(text)
print(trou("hahkasa"))
