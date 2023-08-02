import React from 'react'
import { UncontrolledPopover, Button, PopoverHeader, PopoverBody } from 'reactstrap'

const PopOver5 = () => {
    return (
        <div className="text-center">
            <Button
                id="ScheduleUpdateButton"
                type="button"
            >
                About us
            </Button>
            <UncontrolledPopover
                placement="auto"
                target="ScheduleUpdateButton"
                trigger="click"

            >
                <PopoverHeader>Welcome to Our Online Learning Platform</PopoverHeader>
                <PopoverBody> About Us

                    At [<strong>LearnWith Atique</strong>], we are passionate about empowering individuals to unlock their potential through the power of education. Our platform provides a comprehensive range of courses, specifically designed to help you master Java, Spring Boot, React, and Django – some of the most in-demand technologies in today's dynamic world.

                    Our Mission

                    Our mission is to make high-quality and practical education accessible to everyone, regardless of their location or background. We believe that knowledge is a transformative force that can open doors, broaden horizons, and shape careers. With this belief at the core of everything we do, we strive to offer an enriching and supportive learning environment to help our students thrive.

                    Why Choose Us?

                    Expert Instructors: Our courses are crafted by industry experts with extensive experience in their respective fields. You'll learn from professionals who have been there, done that, and are eager to share their knowledge.

                    Hands-On Learning: We emphasize hands-on projects and practical exercises, allowing you to apply what you learn and gain real-world skills that employers value.

                    Flexibility: Learn at your own pace with our self-paced courses. Whether you're a busy professional, a student, or a lifelong learner, our platform fits into your schedule.

                    Comprehensive Curriculum: Our curriculum is designed to cover all aspects of each technology, providing you with a well-rounded understanding of Java, Spring Boot, React, and Django.

                    Supportive Community: Join our vibrant learning community, where you can connect with fellow learners, exchange ideas, and get support from our dedicated team of instructors.

                    What Sets Us Apart

                    At [<strong>LearnWith Atique</strong>], we stand out because of our commitment to excellence and continuous improvement. Here are some key aspects that set us apart:

                    Real-World Projects: Get hands-on experience by working on real-world projects that simulate actual industry scenarios.

                    Personalized Learning: Tailor your learning journey to your specific needs and interests with our wide selection of courses and learning paths.

                    Industry-Relevant Content: Our courses are regularly updated to reflect the latest trends and advancements in the technology landscape.

                    Career Support: Benefit from career resources, job placement assistance, and guidance on building a standout portfolio.

                    Join Us Today

                    Whether you are a beginner taking your first steps into programming or an experienced developer looking to upskill, [Your Learning Platform Name] has the perfect course for you. Start your learning journey with us today and embark on a path of growth and endless opportunities.

                    We look forward to welcoming you to our online learning community!.</PopoverBody>
            </UncontrolledPopover>
        </div>
    )
}

export default PopOver5
