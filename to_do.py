#show help
def show_help():
    print("Enter 'DONE' to stop adding items.")
    print("Enter 'SHOW' to print current list")
    print("Enter 'HELP' to print instructions")

#show current list
def show_list(list):
    print("List: ")
    for item in list:
        print(" " + item)

# put new tings into the list, one at a time
def add_to_list(list):
    to_do = None

    while True:

        to_do = input('> ')

        # enter the word DONE to quit, in all caps
        if to_do == 'DONE':
            break
        elif to_do == 'SHOW':
            show_list(list)
        elif to_do == 'HELP':
            show_help()
        else:
            list.append(to_do)

    # once done show list
    return list

def run_app():
    list = []
    print("Enter things To Do: ")
    show_help()
    add_to_list(list)
    show_list(list)

# run the script
run_app()
