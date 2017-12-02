#test for acceptible item
def is_okay(item):
    return item != ""

#show help
def show_help():
    print("""    Enter things To Do:
    Type 'DONE' to stop adding items.
    Type 'SHOW' to print current list.
    Type 'HELP' to print instructions.""")

#show current list
def show_list(list):
    print("Here's your List: ")
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

def write_to_file(list):
    file = open('to_do_list.txt', 'w')
    for item in list:
        file.write(item + "\n")
    file.close()

def read_from_file(list):
    file = open("to_do_list.txt", "r")
    file_list = file.readlines()
    file.close()
    for line in file_list:
        list.append(line.rstrip("\n"))
    show_list(list)
    return list

def run_app():
    list = []
    list = read_from_file(list)
    show_help()
    list = query_user(list)
    show_list(list)
    write_to_file(list)

# run the script
run_app()
