﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MyFirstASPNETWebApp.Models
{
    public class GradeCalculatorModel
    {
        [Required]
        [Range(0, 100)]
        public int Assignments { get; set; }
        [Required]
        [Range(0, 100)]
        public int GroupProjects { get; set; }
        [Required]
        [Range(0, 100)]
        public int Quizzes { get; set; }
        [Required]
        [Range(0, 100)]
        public int Midterm { get; set; }
        [Required]
        [Range(0, 100)]
        public int Final { get; set; }
        [Required]
        [Range(0, 100)]
        public int Intex { get; set; }
    }
}
