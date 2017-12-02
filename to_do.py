# put new tings into the list, one at a time
def add_to_list(list):
    to_do = None
    # enter the word DONE to quit, in all caps
    while to_do != 'DONE':

        to_do = input('Enter something To Do: ')
        if to_do == 'DONE':
            break
        else:
            list.append(to_do)
    # once done show list
    return list

def run_app():
    headline = "Things to do:\n "
    list = []
    add_to_list(list)
    print(headline + "\n ".join(list))

# run the script
run_app()
