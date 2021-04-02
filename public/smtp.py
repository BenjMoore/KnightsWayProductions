import smtp 



explicit = 1
explicit = ["Nigger","Dike","Faggot"]
msg = input("What is your message: ")
if explicit in msg :
    msg = explicit
    print("Could Not Send, Includes Excluded Words || Excluded Words: {0}".format(explicit))