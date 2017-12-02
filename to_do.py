#test for acceptible item
def is_okay(item):
    return item != ""

#show help
def show_help():
    print("""    Enter 'DONE' to stop adding items.
    Enter 'SHOW' to print current list.
    Enter 'HELP' to print instructions.""")

#show current list
def show_list(list):
    print("List: ")
    for item in list:
        print(" " + item)

# put new tings into the list, one at a time
def add_to_list(item, list):
    list.append(item)
    return list

def show_add(item, list):
    print ("Added {}, your To Do List now has {} things to do.".format(item, len(list)))


#ask for, process input
def query_user(list):
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
        elif is_okay(to_do):
            list = add_to_list(to_do, list)
            show_add(to_do, list)
        else:
            continue

    # once done show list
    return list

def run_app():
    list = []
    print("Enter things To Do: ")
    show_help()
    query_user(list)
    show_list(list)

# run the script
run_app()
