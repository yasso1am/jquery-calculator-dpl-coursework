$(document).ready( function() {
var input = ""
var operator
var regexNumber = /^\d+(\.\d+)?$/
var regexMath = /[\+\-\*\/]/

//USER SELECTION//
$('.selection').on('click', function() {
  input += $(this).data().type
  $('#input').val(input)
})

// #=====instructions====

// def main_menu
//   puts "\t--------Calculator---------"
//   puts "\t1) Perform calculations"
//   puts "\t2) Previous answers"
//   puts "\t3) Clear history"
//   puts "\t4) Continue calculating off last number"
//   puts "\t5) Input your math on a single line"
//   puts "\t6) Quit"
//   puts "\tKeywords: Type 'clear' within your equations to go back a step"
//   print "> "
//   main_program
// end

// #====first number=====#

// def first_number
//   puts "Please select a number: "
//   puts ""
//     @user_input1 = gets.strip
//   if @user_input1.match(@regexnumber)
//     @user_input1 = @user_input1.to_f
//     get_operator
//   elsif
//     @user_input1 == "clear"
//     main_menu
//   else
//     puts "Invalid selection, try again: "
//     first_number
//   end
// end

// #====get operator=====#

// def get_operator
//   puts "Please select an operator [ + - * / ]"
//   puts ""
//     @operator = gets.strip
//   if @operator.match(@regexmath)
//     @operator = @operator.to_sym
//       second_number
//   elsif
//     @operator == "clear"
//       first_number
//   else
//       puts "Invalid selection, try again: "
//       get_operator
//   end
// end

// #====second number====#

// def second_number
//   puts "Please select a second number"
//   puts ""
//   @user_input2 = gets.strip
//     if @user_input2.match(@regexnumber)
//       @user_input2 = @user_input2.to_f
//       evaluate_all
//     elsif
//       @user_input2 == "clear"
//       get_operator
//     else
//       puts "Invalid selection, try again: "
//       second_number
//     end
// end

// #====evaluate all=====#

// def evaluate_all
//   results = @user_input1.send(@operator, @user_input2)
//   puts "Your result is: #{results}"
//   puts ""
//   @user_results << results
// end

// #====delete answers===#

// def delete_answers
//   puts "Are you sure you want to clear results? [Y/N]"
//   puts ""
//     answer = gets.strip
//   if answer == "Y"
//     @user_results = []
//   else
//     main_menu
//   end
// end

// #====recalculate=====#

// def recalculate
//   puts "Your last number was #{@user_results.last}"
//   puts "What would you like to do with to that number?"
//   puts "Choose an operator by symbol [ +  -  *  / ]"
//     operator = gets.strip.to_sym
//     case operator
//       when "Clear"
//         main_menu
//       when operator.to_sym
//     puts "What is the second number?"
//       second_number = gets.strip.to_f
//       results = @user_results.last.send(operator, second_number)
//     puts results
//     else
//       puts "Invalid operator selected"
//       recalculate
//     end
//   @user_results << results
//   puts ""
// end

// #====input single=====#

// def single_input_calc
//   puts "Enter first number then operator [ + - * / ] then second number."
//   puts ""
//     to_calc = gets.strip
//     arr = to_calc.split
//     first_num = arr[0].to_f
//     op = arr[1].to_sym
//     second_num = arr[2].to_f
//     results = first_num.to_f.send(op, second_num)
//   puts results
//     @user_results << results
// end

// #====main program=====#

// def main_program
//   user_choice = gets.strip.to_i
//     case user_choice
//       when 1
//         first_number
//       when 2
//         puts "Here are your previous answers: "
//         puts ""
//         puts @user_results
//         puts ""
//       when 3
//         delete_answer
//       when 4
//         recalculate
//       when 5
//         single_input_calc
//       when 6
//         puts "Goodbye friend"
//         exit
//       else
//         puts "Invalid input"

})